import jalaali from 'jalaali-js';

export function convertToJalali(dateString: string): string {
    const date = new Date(dateString);
    const jalaliDate = jalaali.toJalaali(date);
    return `${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd}`;
}
