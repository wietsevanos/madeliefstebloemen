// Mother's Day dates for the Netherlands (second Sunday of May)
const MOEDERDAG_DATES: Record<number, string> = {
  2026: '2026-05-10',
  2027: '2027-05-09',
  2028: '2028-05-14',
  2029: '2029-05-13',
  2030: '2030-05-12',
  2031: '2031-05-11',
  2032: '2032-05-09',
  2033: '2033-05-08',
  2034: '2034-05-14',
  2035: '2035-05-13',
};

export function getMoederdagDate(year: number): Date | null {
  const dateStr = MOEDERDAG_DATES[year];
  if (!dateStr) return null;
  return new Date(dateStr + 'T00:00:00');
}

export function isMoederdagActief(now: Date = new Date()): boolean {
  const year = now.getFullYear();
  
  // Check current year and next year (for campaigns that start in December for next year's date)
  for (const y of [year, year + 1]) {
    const moederdag = getMoederdagDate(y);
    if (!moederdag) continue;
    
    const start = new Date(moederdag);
    start.setDate(start.getDate() - 30); // 30 days before
    
    const end = new Date(moederdag);
    end.setDate(end.getDate() + 1); // 1 day after
    end.setHours(23, 59, 59, 999);
    
    if (now >= start && now <= end) return true;
  }
  
  return false;
}
