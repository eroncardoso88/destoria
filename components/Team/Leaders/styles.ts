import classNameAdder from 'utils/classNameAdder'

const styles = {
    leaders: "m-auto",
    contentLayer: "w-full h-full relative m-auto",
    containerLeaders: "w-full cards-carousel-container m-auto",
    containerLeadersBordered: "layout-border md:py-32 md:mx-5",
    leadersContent: "flex flex-col justify-center items-center text-center text-dwhite bg-no-repeat relative text-5xl uppercase font-bold tracking-wider layout-first-border md:pt-28 md:mx-5 xl:mx-5",
    leadersTitle: "py-16 md:py-0 px-4 md:px-0",
    leadersMembers: "px-3 md:px-0 flex justify-between w-full max-w-lg gap-2 m-auto md:pt-28",
    leadersText: "md:py-8 capitalize",
    leadersTextTitle: "font-bold text-xl w-full text-center",
    leadersTextDescription: "text-base w-full text-center pt-1 pb-3 leaders-border-bottom font-normal",
    leadersSocialMedia: "flex justify-center gap-4 pb-4 md:pb-0",
    socialMedia: "cursor-pointer"
}


export default classNameAdder(styles)