export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuList = [
    new MenuItem('CONTENT MANAGEMENT', 'CONTENT MANAGEMENT', 'CONTENT MANAGEMENT', 'science'),
    new MenuItem('COURSES', 'COURSES', 'COURSES', 'biotech'),
];