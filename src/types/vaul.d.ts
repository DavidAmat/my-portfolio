declare module "vaul" {
    import * as React from "react";

    export namespace Drawer {
        interface RootProps {
            children?: React.ReactNode;
            open?: boolean;
            onOpenChange?: (open: boolean) => void;
            [key: string]: any;
        }

        interface TriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
        interface PortalProps {
            children?: React.ReactNode;
            [key: string]: any;
        }
        interface CloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
        interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> { }
        interface ContentProps extends React.HTMLAttributes<HTMLDivElement> { }
        interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }
        interface DescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> { }

        const Root: React.FC<RootProps>;
        const Trigger: React.FC<TriggerProps>;
        const Portal: React.FC<PortalProps>;
        const Close: React.FC<CloseProps>;
        const Overlay: React.FC<OverlayProps>;
        const Content: React.FC<ContentProps>;
        const Title: React.FC<TitleProps>;
        const Description: React.FC<DescriptionProps>;
    }

    export { Drawer };
}

