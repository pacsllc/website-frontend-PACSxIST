import { cn } from "@/lib/utils";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export function P() {
  return (
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
  );
}

export function H1() {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Joke Tax Chronicles
        </h1>
    );
}

export function H2() {
    return (
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          The King's Plan
        </h2>
    );
}

export function H3() {
    return (
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Jokester's Revolt
        </h3>
    );
}

export function A() {
    return (
        <a
        href="#"
        className="font-medium text-primary underline underline-offset-4"
        >
        a brilliant plan
        </a>
    );
}

export function Blockquote() {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          "After all," he said, "everyone enjoys a good joke, so it's only fair
          that they should pay for the privilege."
        </blockquote>
    );
}

export function Ul() {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            ...
        </ul>
    );
}

export function Li() {
    return (
        <li>...</li>
    );
}

export function Th() {
  return (<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
    ...
  </th>)
}

export function Tr() {
  return (<tr className="m-0 border-t p-0 even:bg-muted">
    ...
  </tr>)
}

export function Thead() {
  return (<thead>
  </thead>)
}

export function Tbody() {
  return (<tbody>
  </tbody>)
}

export function Table() {
  <div className="my-6 w-full overflow-y-auto">
    <table className="w-full">
    </table>
  </div>
}

export function TypographyDemo() {
    return (
      <div>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king's
          foolishness get him down: a court jester named Jokester.
        </p>
        
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his soup,
          even in the royal toilet. The king was furious, but he couldn't seem to
          stop Jokester.
        </p>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
          </table>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the error
          of his ways and repealed the joke tax. Jokester was declared a hero, and
          the kingdom lived happily ever after.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The moral of the story is: never underestimate the power of a good laugh
          and always be careful of bad ideas.
        </p>
      </div>
    )
  }
  