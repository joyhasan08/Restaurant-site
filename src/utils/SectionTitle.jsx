

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-fit mx-auto text-center space-y-1 py-4">
            <p className="lg:text-xl border-b-2">--- {subHeading} ---</p>
            <h1 className="lg:text-4xl font-semibold">{heading}</h1>
        </div>
    );
};

export default SectionTitle;