import { run } from "./utils";

export function ObserverPage(parent: HTMLElement, pages: HTMLElement[],
    onEnter: (dom: HTMLElement) => void | undefined,
    onExit: (dom: HTMLElement) => void | undefined) {
    const status: boolean[] = new Array(pages.length).fill(false);
    const random = ~~(Math.random() * 10000);
    const fn = () => {
        run(random.toString(), () => {
            pages.forEach((page, i) => {
                const isInView = isInViewPort(page.getBoundingClientRect());
                if (status[i] == true && isInView == false) {
                    onExit?.(page);
                }
                else if (status[i] == false && isInView == true) {
                    onEnter?.(page);
                }
                status[i] = isInView;
            });
        }, 100)
    };
    parent.addEventListener("scroll", fn);
    fn();
}

function isInViewPort(rect: DOMRect) {
    return rect.top >= -10 && rect.bottom <= window.innerHeight + 10;
}