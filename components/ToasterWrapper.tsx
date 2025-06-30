"use client"

import toast, { ToastBar, Toaster } from "react-hot-toast";

const ToasterWrapper = () => {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                style: {
                    backgroundColor: "var(--background-secondary)",
                    color: "var(--text-secondary)"
                },
                duration: 5000
            }}
        >
            {(t) => (
                <ToastBar toast={t}>
                    {({ icon, message }) => (
                        <div className="flex gap-0.5 relative">
                            {icon}
                            {message}
                            {t.type !== 'loading' && (
                                <button
                                    className="border border-white px-1 py-0.5 rounded-full text-[10px]/3 text-center absolute top-[-12px] right-[-12px] hover:bg-[theme(--color-primary-dark)] cursor-pointer"
                                    onClick={() => toast.dismiss(t.id)}
                                >
                                    X
                                </button>
                            )}
                        </div>
                    )}
                </ToastBar>
            )}
        </Toaster>
    )
}

export default ToasterWrapper