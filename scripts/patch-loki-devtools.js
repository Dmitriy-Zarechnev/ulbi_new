const fs = require('fs');
const path = require('path');

const externalRequestPath = path.join(
    __dirname,
    '..',
    'node_modules',
    'chrome-remote-interface',
    'lib',
    'external-request.js',
);
const devtoolsPath = path.join(__dirname, '..', 'node_modules', 'chrome-remote-interface', 'lib', 'devtools.js');

function patchExternalRequest() {
    if (!fs.existsSync(externalRequestPath)) {
        return false;
    }

    const original = fs.readFileSync(externalRequestPath, 'utf8');
    const replacement = `    // perform the actual request
    const method = (options.method || 'GET').toUpperCase();
    const request = method === 'GET'
        ? transport.get(options, onResponse)
        : transport.request({...options, method}, onResponse);

    function onResponse(response) {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            if (response.statusCode === 200) {
                callback(null, data);
            } else {
                callback(new Error(data));
            }
        });
    }

    if (method !== 'GET') {
        request.end();
    }`;

    const pattern = / {4}\/\/ perform the actual request[\s\S]*? {4}request\.on\('error', callback\);/;
    if (!pattern.test(original)) {
        throw new Error('Failed to find external-request.js request block');
    }

    const updated = original.replace(pattern, `${replacement}\n    request.on('error', callback);`);

    if (updated === original) {
        return false;
    }

    fs.writeFileSync(externalRequestPath, updated, 'utf8');
    return true;
}

function patchDevtools() {
    if (!fs.existsSync(devtoolsPath)) {
        return false;
    }

    const original = fs.readFileSync(devtoolsPath, 'utf8');
    if (original.includes("options.method = 'PUT';")) {
        return false;
    }

    const updated = original.replace(
        "function New(options, callback) {\n    options.path = '/json/new';",
        "function New(options, callback) {\n    options.method = 'PUT';\n    options.path = '/json/new';",
    );

    if (updated === original) {
        throw new Error('Failed to patch devtools.js');
    }

    fs.writeFileSync(devtoolsPath, updated, 'utf8');
    return true;
}

if (!fs.existsSync(devtoolsPath)) {
    console.log('chrome-remote-interface not found, skipping patch');
    process.exit(0);
}

const changedExternalRequest = patchExternalRequest();
const changedDevtools = patchDevtools();

if (changedExternalRequest || changedDevtools) {
    console.log('patched chrome-remote-interface for modern Chrome DevTools');
} else {
    console.log('chrome-remote-interface patch already applied');
}
