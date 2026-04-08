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
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
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
