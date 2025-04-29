import React from 'react';

const AfterLoginView = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back!</h1>
                <p className="text-gray-600 mb-6">You have successfully logged in.</p>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Go to Dashboard
                </button>
            </div>
        </div>
    );
};

export default AfterLoginView;