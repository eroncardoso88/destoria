import classNameAdder from 'utils/classNameAdder'

const styles = {
    faq: "w-full flex flex-col justify-center text-dwhite items-center text-dwhite bg-no-repeat bg-cover",
    contentLayer: "w-full h-full relative m-auto",
    containerFaq: "w-full cards-carousel-container m-auto",
    containerFaqBordered: "layout-border md:py-16 md:mx-5",
    faqContent: "px-3 text-dwhite max-w-4xl m-auto w-full pb-5",
    titles: "text-xl text-center font-bold pb-5",
    titleContent: "uppercase font-bold tracking-wider text-3xl py-6",
    descriptive: "inline font-bold",
    paragraph: "mb-3",
}


export default classNameAdder(styles)