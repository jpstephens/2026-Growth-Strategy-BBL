interface SlideCounterProps {
  current: number
  total: number
}

export default function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <div className="fixed bottom-lg right-lg text-sm font-semibold text-bb-dark-gray bg-bb-light-gray px-md py-xs rounded-md">
      {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  )
}
