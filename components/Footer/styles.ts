import classNameAdder from 'utils/classNameAdder'

const styles = {
    footer: "w-full flex flex-col justify-center items-center text-dwhite bg-no-repeat bg-cover px-6 md:px-0",
    contentLayer: "w-full h-full relative m-auto pt-5 md:pt-0",
    containerFooter: "w-full cards-carousel-container m-auto",
    containerFooterBordered: "layout-border md:mx-5 footer",
    footerContent: "flex justify-between lg:px-2 max-w-6xl m-auto w-full footer-border items-center",
    mediaBox: "flex gap-1 md:gap-3",
    contactUs: "relative -top-1 hidden md:block cursor-pointer hover:opacity-70 ease-in duration-300",
    footerLinks: "relative -top-1 cursor-pointer hover:opacity-70 ease-in duration-300",
    footerLower: "flex justify-between lg:px-2 max-w-6xl m-auto w-full items-center",
    policyConditions: "flex gap-4 py-6 justify-between md:justify-start",
    destoria: "relative md:-left-4 opacity-50",
    destoriaDescriptionInline: "hidden md:block text-right",
    destoriaDescriptionOutline: "block md:hidden w-full text-center pb-5",

}


export default classNameAdder(styles)