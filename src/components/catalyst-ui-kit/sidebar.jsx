"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import React, { Fragment, forwardRef, useId } from "react";
import { TouchTarget } from "./button";
import { Link } from "./link";

export function Sidebar({ className, ...props }) {
  return (
    <nav
      {...props}
      className={clsx(className, "flex h-full min-h-0 flex-col w-full")}
    />
  );
}

export function SidebarHeader({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "flex flex-col border-zinc-950/5 p-4 pb-0 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5"
      )}
    />
  );
}

export function SidebarBody({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "flex flex-1 flex-col overflow-y-auto p-4 pt-0 [&>[data-slot=section]+[data-slot=section]]:mt-8"
      )}
    />
  );
}

export function SidebarFooter({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5"
      )}
    />
  );
}

export function SidebarSection({ className, ...props }) {
  let id = useId();

  return (
    <LayoutGroup id={id}>
      <div
        {...props}
        data-slot="section"
        className={clsx(className, "flex flex-col gap-2")}
      />
    </LayoutGroup>
  );
}

export function SidebarDivider({ className, ...props }) {
  return (
    <hr
      {...props}
      className={clsx(
        className,
        "my-4 border-t border-zinc-950/5 lg:-mx-4 dark:border-white/5"
      )}
    />
  );
}

export function SidebarSpacer({ className, ...props }) {
  return (
    <div
      aria-hidden="true"
      {...props}
      className={clsx(className, "mt-8 flex-1")}
    />
  );
}

export function SidebarHeading({ className, ...props }) {
  return (
    <h3
      {...props}
      className={clsx(
        className,
        "mb-1 px-2 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400"
      )}
    />
  );
}

export const SidebarItem = forwardRef(function SidebarItem(
  { current, className, active, children, ...props },
  ref
) {
  let classes = clsx(
    active ? "bg-gray-50 text-gray-700" : "text-gray-700 hover:bg-gray-50",
    "group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 w-full"
  );

  return (
    <span className={clsx(className, "relative")}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
        />
      )}
      {"href" in props ? (
        <Headless.CloseButton as={Fragment} ref={ref}>
          <Link
            className={classes}
            {...props}
            data-current={current ? "true" : undefined}
          >
            <TouchTarget>{children}</TouchTarget>
          </Link>
        </Headless.CloseButton>
      ) : (
        <Headless.Button
          {...props}
          className={clsx("cursor-default", classes)}
          data-current={current ? "true" : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.Button>
      )}
    </span>
  );
});

export function SidebarLabel({ className, ...props }) {
  return <span {...props} className={clsx(className, "truncate")} />;
}
