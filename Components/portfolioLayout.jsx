import NavigationBar from "./NavigationBar/navigationBar";

const PortfolioLayout = function ({children}) {
    return (
        <div className={"portfolio-wrapper"}>
            <NavigationBar />
            {children}
        </div>
    )
}

export default PortfolioLayout;