export const typeDefs = ["type User {\n  id: Int!\n  email: String!\n  firstName: String!\n  lastName: String!\n  age: Int\n  password: String!\n  phoneNumber: String!\n  verifiedEmail: Boolean!\n  profilePhto: String!\n  fullName: String!\n  isDriving: Boolean!\n  isRiding: Boolean!\n  isTaken: Boolean!\n  lastLng: Float\n  lastlat: Float\n  lastOrientation: Float\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Query {\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
  user: User | null;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  age: number | null;
  password: string;
  phoneNumber: string;
  verifiedEmail: boolean;
  profilePhto: string;
  fullName: string;
  isDriving: boolean;
  isRiding: boolean;
  isTaken: boolean;
  lastLng: number | null;
  lastlat: number | null;
  lastOrientation: number | null;
  createdAt: string;
  updatedAt: string;
}
