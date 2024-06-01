const ShimmerUI = () => {
    return (
        <div id="shimmer">
            {Array(10).fill().map((_, index) => (
                <div key={index} className="shimmerCard">
                </div>
            ))}
        </div>
    );
}
export default ShimmerUI;
