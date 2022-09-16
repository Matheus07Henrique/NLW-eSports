export function convertMinutesToHours(amountMinutes: number){
    const hours = Math.floor(amountMinutes/60) 
    const minutes = amountMinutes%60

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}