interface Position {
    x: number;
    y: number;
}

interface Size {
    width: number;
    height: number;
}

interface Offset {
    x: number;
    y: number;
}

export function calculateClampedPosition(
    cursorPos: Position,
    viewportSize: Size,
    thumbSize: Size,
    offset: Offset,
    margin: number
): { left: number, top: number } | null {
    if (!viewportSize.width || !viewportSize.height) {
        return null;
    }

    const { x: cursorX, y: cursorY } = cursorPos;
    const { width: viewportWidth, height: viewportHeight } = viewportSize;
    const { width: thumbWidth, height: thumbHeight } = thumbSize;
    const { x: offsetX, y: offsetY } = offset;

    let targetLeft = cursorX + offsetX;
    let targetTop = cursorY + offsetY;

    if (targetTop + thumbHeight + margin > viewportHeight) {
        targetTop = cursorY - thumbHeight - offsetY;
    }
    if (targetTop < margin) {
        targetTop = margin;
    }
    if (targetLeft + thumbWidth + margin > viewportWidth) {
        targetLeft = viewportWidth - thumbWidth - margin;
    }
    if (targetLeft < margin) {
        targetLeft = margin;
    }

    return { left: targetLeft, top: targetTop };
} 