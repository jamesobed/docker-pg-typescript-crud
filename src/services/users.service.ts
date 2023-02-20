import User from "../models/user.model";

class UserService {
  public async getAllUsers() {
    return await User.findAll();
  }

  public async createUser(name: string, email: string, password: string) {
    return await User.create({ name, email, password });
  }

  public async updateUser(
    id: number,
    name: string,
    email: string,
    password: string
  ) {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("User not found");
    }

    user.name = name;
    user.email = email;
    user.password = password;

    return await user.save();
  }

  public async deleteUser(id: number) {
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");

    return await user.destroy();
  }
}

export default new UserService();
