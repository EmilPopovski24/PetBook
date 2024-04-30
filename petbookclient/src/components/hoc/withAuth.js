
export const withAuth = (Component) => {
    const WrapperComponent = (props) => {
        return (
            <Component {...props} />
        )
    }

    return WrapperComponent
}