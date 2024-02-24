"use client"

import React from 'react'
import Image from "next/image";
import LogoFooter from "@/public/logo-baru.png";

export default function Footer() {
    return (
    <>
        <section>
            <footer className="bg-base-150 dark:bg-basetext-base-100">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-20">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="#" className="flex items-center">
                                <Image src={LogoFooter} width={220} alt="FlowBite Logo"/>
                            </a>
                        </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                    {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2> */}
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        </ul>
                    </div>
                <div className='mr-10'>
                    <h2 className="mb-6 text-sm font-bold text-base-100 uppercase dark:text-white">Resource</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                            <a href="https://nextjs.org/" target='_blank' className="hover:underline">Next js</a>
                        </li>
                        <li className="mb-4">
                        <span>
                            <a href="https://www.javascript.com/" target='_blank' className="hover:underline">Javascript  </a>
                        </span>
                        & 
                        <span>
                            <a href="https://www.typescriptlang.org/" target='_blank' className="hover:underline"> TypeScript</a>
                        </span>
                        </li>
                        <li className="mb-4">
                            <a href="https://tailwindcss.com/" target='_blank' className="hover:underline">Tailwind CSS</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://www.mongodb.com/" target='_blank' className="hover:underline">MongoDB</a>
                        </li>
                        <li className="mb-4">
                            <a href="https://figma.com/" target='_blank' className="hover:underline">Figma</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-base-100 uppercase dark:text-white">Follow Us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                            <a href="https://github.com/Fast-and-Serious-Production" target='_blank' className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/innosync_" target='_blank' className="hover:underline">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-darkBlue sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">InnoSync™</a>. All Rights Reserved.
            </span>

        </div>
                </div>
            </footer>
        </section>
    </>
    )
}
