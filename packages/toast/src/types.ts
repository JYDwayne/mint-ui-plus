export interface IToastHandle {
    close: () => void
}

export interface IToastOption {
    duration?: number,
    message?: string,
    position?: string,
    className?: string,
    iconClass?: string,
    onClose?: () => void
}
