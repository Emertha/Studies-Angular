export class Details {
  constructor(
    public telnum: String,
    public email: String,
  ) { }
}

export class OneContact {
  constructor(
    public name: String,
    public surname: String,
    public indexNumber?: number,
    public details?: Details,
    public img: String = `https://randomuser.me/api/portraits/men/` + Math.floor(Math.random() * 10) + `.jpg`,
  ) { }
}
