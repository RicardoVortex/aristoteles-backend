import User from "../entities/User";

export default interface NotifierRepository {
  notifyUser(user: User): Promise<void>
}
