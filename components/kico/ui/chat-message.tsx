import { ChatBubbleWing } from "@/components/icons/chat-buble-wing";

type ChatMessageProps = {
  children: React.ReactNode;
};

export const ChatMessage = ({ children }: ChatMessageProps) => {
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-primary dark:text-black text-white rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      {children}

      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

type LeftSideChatMessageProps = {
  icon?: React.ReactNode;
  children: React.ReactNode;
  subMessage?: string;
};

export const LeftSideChatMessage = ({
  icon,
  children,
  subMessage,
}: LeftSideChatMessageProps) => {
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 dark:text-black text-white rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem] bg-primary">
      {children}
      {icon && (
        <div className="absolute left-5 -bottom-[1.125rem] bg-card shadow text-foreground flex items-center justify-center w-[2.25rem] h-[2.25rem] rounded-[0.75rem]">
          {icon}
        </div>
      )}
      {subMessage && (
        <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-muted-foreground uppercase">
          {subMessage}
        </p>
      )}
      <ChatBubbleWing className="absolute right-full bottom-0 -scale-x-100" />
    </div>
  );
};
