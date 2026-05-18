// Tremor Calendar [v1.0.0]

"use client"

import * as React from "react"
import {
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
} from "@remixicon/react"
import { addYears, format, type Locale } from "date-fns"
import {
  DayFlag,
  DayPicker,
  SelectionState,
  UI,
  useDayPicker,
  type ChevronProps,
  type DayButtonProps,
  type DayPickerProps,
  type DateRange,
  type Matcher,
  type MonthCaptionProps,
  type OnSelectHandler,
} from "react-day-picker"

import { cx } from "../../utils/cx"
import { focusRing } from "../../utils/focusRing"

interface NavigationButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  icon: React.ElementType
  disabled?: boolean
}

const NavigationButton = React.forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>(
  (
    { onClick, icon, disabled, ...props }: NavigationButtonProps,
    forwardedRef,
  ) => {
    const Icon = icon
    return (
      <button
        ref={forwardedRef}
        type="button"
        disabled={disabled}
        className={cx(
          "flex size-8 shrink-0 select-none items-center justify-center rounded-sm border p-1 outline-hidden transition sm:size-[30px]",
          // text color
          "text-gray-600 hover:text-gray-800",
          "dark:text-gray-400 dark:hover:text-gray-200",
          // border color
          "border-gray-300 dark:border-gray-800",
          // background color
          "hover:bg-gray-50 active:bg-gray-100",
          "dark:hover:bg-gray-900 dark:active:bg-gray-800",
          // disabled
          "disabled:pointer-events-none",
          "disabled:border-gray-200 dark:disabled:border-gray-800",
          "disabled:text-gray-400 dark:disabled:text-gray-600",
          focusRing,
        )}
        onClick={onClick}
        {...props}
      >
        <Icon className="size-full shrink-0" />
      </button>
    )
  },
)

NavigationButton.displayName = "NavigationButton"

type KeysToOmit =
  | "showWeekNumber"
  | "captionLayout"
  | "mode"
  | "selected"
  | "onSelect"

type LegacyNavigationProps = {
  fromDate?: Date
  toDate?: Date
}

type CalendarProps = Omit<DayPickerProps, KeysToOmit> &
  LegacyNavigationProps & {
    mode?: "single" | "range"
    initialFocus?: boolean
    selected?: Date | DateRange
    onSelect?: OnSelectHandler<Date | undefined> | OnSelectHandler<DateRange | undefined>
  }

const Calendar = ({
  mode = "single",
  weekStartsOn = 1,
  numberOfMonths = 1,
  enableYearNavigation = false,
  disableNavigation,
  fromDate,
  toDate,
  initialFocus,
  locale,
  className,
  classNames,
  ...props
}: CalendarProps & { enableYearNavigation?: boolean }) => {
  const startMonth = props.startMonth ?? fromDate
  const endMonth = props.endMonth ?? toDate

  return (
    <DayPicker
      mode={mode}
      weekStartsOn={weekStartsOn}
      numberOfMonths={numberOfMonths}
      startMonth={startMonth}
      endMonth={endMonth}
      locale={locale}
      showOutsideDays={numberOfMonths === 1}
      className={cx(className)}
      classNames={{
        [UI.Months]: "flex space-y-0",
        [UI.Month]: "space-y-4 p-3",
        [UI.Nav]: "hidden",
        [UI.MonthGrid]: "w-full border-collapse space-y-1",
        [UI.Weekday]:
          "w-9 font-medium text-sm sm:text-xs text-center text-gray-400 dark:text-gray-600 pb-2",
        [UI.Week]: "w-full mt-0.5",
        [UI.Day]: cx(
          "relative p-0 text-center focus-within:relative",
          "text-gray-900 dark:text-gray-50",
        ),
        [UI.DayButton]: cx(
          "size-9 rounded-sm text-sm focus:z-10",
          "text-gray-900 dark:text-gray-50",
          "hover:bg-gray-200 dark:hover:bg-gray-700",
          focusRing,
        ),
        [DayFlag.today]: "font-semibold",
        [SelectionState.selected]: cx(
          "rounded-sm",
          "aria-selected:bg-blue-500 aria-selected:text-white",
          "dark:aria-selected:bg-blue-500 dark:aria-selected:text-white",
        ),
        [DayFlag.disabled]:
          "text-gray-300! dark:text-gray-700! line-through disabled:hover:bg-transparent",
        [DayFlag.outside]: "text-gray-400 dark:text-gray-600",
        [SelectionState.range_middle]: cx(
          "rounded-none!",
          "aria-selected:bg-gray-100! aria-selected:text-gray-900!",
          "dark:aria-selected:bg-gray-900! dark:aria-selected:text-gray-50!",
        ),
        [SelectionState.range_start]: "rounded-r-none rounded-l!",
        [SelectionState.range_end]: "rounded-l-none rounded-r!",
        [DayFlag.hidden]: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }: ChevronProps) =>
          orientation === "left" ? (
            <RiArrowLeftSLine aria-hidden="true" className="size-4" />
          ) : (
            <RiArrowRightSLine aria-hidden="true" className="size-4" />
          ),
        MonthCaption: ({ calendarMonth, displayIndex }: MonthCaptionProps) => {
          const {
            goToMonth,
            nextMonth,
            previousMonth,
            months,
            dayPickerProps,
          } = useDayPicker()
          const currentMonth = months[0]?.date ?? calendarMonth.date
          const startMonth = dayPickerProps.startMonth
          const endMonth = dayPickerProps.endMonth
          const isFirst = displayIndex === 0
          const isLast = displayIndex === months.length - 1

          const hideNextButton = numberOfMonths > 1 && (isFirst || !isLast)
          const hidePreviousButton = numberOfMonths > 1 && (isLast || !isFirst)

          const goToPreviousYear = () => {
            const targetMonth = addYears(currentMonth, -1)
            if (
              previousMonth &&
              (!startMonth || targetMonth.getTime() >= startMonth.getTime())
            ) {
              goToMonth(targetMonth)
            }
          }

          const goToNextYear = () => {
            const targetMonth = addYears(currentMonth, 1)
            if (
              nextMonth &&
              (!endMonth || targetMonth.getTime() <= endMonth.getTime())
            ) {
              goToMonth(targetMonth)
            }
          }

          return (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {enableYearNavigation && !hidePreviousButton && (
                  <NavigationButton
                    disabled={
                      disableNavigation ||
                      !previousMonth ||
                      (startMonth &&
                        addYears(currentMonth, -1).getTime() <
                          startMonth.getTime())
                    }
                    aria-label="Go to previous year"
                    onClick={goToPreviousYear}
                    icon={RiArrowLeftDoubleLine}
                  />
                )}
                {!hidePreviousButton && (
                  <NavigationButton
                    disabled={disableNavigation || !previousMonth}
                    aria-label="Go to previous month"
                    onClick={() => previousMonth && goToMonth(previousMonth)}
                    icon={RiArrowLeftSLine}
                  />
                )}
              </div>

              <div
                role="presentation"
                aria-live="polite"
                className="text-sm font-medium capitalize tabular-nums text-gray-900 dark:text-gray-50"
              >
                {format(calendarMonth.date, "LLLL yyy", {
                  locale: locale as Locale | undefined,
                })}
              </div>

              <div className="flex items-center gap-1">
                {!hideNextButton && (
                  <NavigationButton
                    disabled={disableNavigation || !nextMonth}
                    aria-label="Go to next month"
                    onClick={() => nextMonth && goToMonth(nextMonth)}
                    icon={RiArrowRightSLine}
                  />
                )}
                {enableYearNavigation && !hideNextButton && (
                  <NavigationButton
                    disabled={
                      disableNavigation ||
                      !nextMonth ||
                      (endMonth &&
                        addYears(currentMonth, 1).getTime() >
                          endMonth.getTime())
                    }
                    aria-label="Go to next year"
                    onClick={goToNextYear}
                    icon={RiArrowRightDoubleLine}
                  />
                )}
              </div>
            </div>
          )
        },
        DayButton: ({ modifiers, ...buttonProps }: DayButtonProps) => {
          const { selected, today, disabled, range_middle } = modifiers
          const {
            children: buttonChildren,
            className: buttonClassName,
            ...buttonPropsRest
          } = buttonProps

          return (
            <button
              {...buttonPropsRest}
              type="button"
              className={cx("relative", buttonClassName)}
            >
              {buttonChildren}
              {today && (
                <span
                  className={cx(
                    "absolute inset-x-1/2 bottom-1.5 h-0.5 w-4 -translate-x-1/2 rounded-[2px]",
                    {
                      "bg-blue-500 dark:bg-blue-500": !selected,
                      "bg-white! dark:bg-gray-950!": selected,
                      "bg-gray-400! dark:bg-gray-600!":
                        selected && range_middle,
                      "bg-gray-400 text-gray-400 dark:bg-gray-400 dark:text-gray-600":
                        disabled,
                    },
                  )}
                />
              )}
            </button>
          )
        },
      }}
      tremor-id="tremor-raw"
      {...(props as DayPickerProps)}
      autoFocus={props.autoFocus ?? initialFocus}
    />
  )
}

Calendar.displayName = "Calendar"

export { Calendar, type Matcher }
