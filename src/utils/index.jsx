const Container = ({ children }) => {
    return (
        <div className=" mx-auto max-w-[1450px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {children}
        </div>
    );
};

export default Container;
