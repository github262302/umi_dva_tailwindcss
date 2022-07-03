const App = (
    props,
): React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
> => {
    return (
        <div className="relative">
            <img {...props} />
            {props.red && (
                <div className="absolute bg-red-500 w-2 h-2 rounded-full -top-1 -right-1"></div>
            )}
        </div>
    )
}
export default App
