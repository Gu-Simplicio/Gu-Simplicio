function Button(props) {
    const { txt, func } = props;

    return (
        <button className="
            px-3 py-2
            text-[var(--txt-color)] text-xl font-semibold
            bg-[var(--btn-color)]
            rounded-full
            opacity-85
            cursor-pointer
            transition-all
            hover:opacity-100"
            onClick={() => func()}>
            { txt }
        </button>
    )
}

export default Button;