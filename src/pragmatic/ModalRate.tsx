import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import NewDateSelect from '../components/NewDateSelect';

interface ModalRateProps {
    user: {
        name: string;
        email: string;
    };
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    rates: Array<{ date: string; rate: number; setBy: string }>;
}

export default function ModalRate({ user, isOpen, setIsOpen, rates }: ModalRateProps) {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-50 overflow-hidden" onClose={() => setIsOpen(false)}>

                {/* Background overlay */}
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-30" />
                </Transition.Child>

                {/* Sliding panel */}
                <div className="fixed inset-0 flex justify-end">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-transform ease-in-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-transform ease-in-out duration-300"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel
                            className="w-full sm:w-1/3 max-w-full h-full bg-white dark:bg-slate-800 shadow-xl transform transition-all relative">
                            
                            {/* Close button for mobile */}
                            <div className="absolute top-4 right-4 sm:hidden">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-gray-500 dark:text-slate-400 dark:hover:text-slate-300"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal header */}
                            <div className="px-5 py-3 border-b border-slate-200 dark:border-slate-700">
                                <Dialog.Title className="font-semibold text-slate-800 dark:text-slate-100">
                                    {user.name} ({user.email})
                                </Dialog.Title>
                            </div>

                            {/* Modal content */}
                            <div className="px-5 py-4 h-full">
                                {/* <NewDateSelect /> */}
                                <table className="min-w-full divide-y divide-gray-200 mt-4">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Rate
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Set By
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {rates.map((rate, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rate.date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rate.rate}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rate.setBy}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Modal footer */}
                            <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                                <button
                                    type="button"
                                    className="btn bg-gray-600 hover:bg-gray-700 text-gray-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}
