// Modules
import React, { ErrorInfo, Suspense } from 'react';
// Components
import { PageError } from 'widgets/PageError';
// Types
import { TErrorBoundaryProps, TErrorBoundaryState } from './types';

class ErrorBoundary extends React.Component<TErrorBoundaryProps, TErrorBoundaryState > {
    constructor(props:TErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback={null}>
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;

// Как использовать i18n в классовом компоненте
// export default withTranslation()(ErrorBoundary);
