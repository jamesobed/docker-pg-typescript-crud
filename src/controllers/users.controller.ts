import { Request, Response } from "express";
import UserService from "../services/users.service";

class UserController {
  public async getAllUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  }

  public async createUser(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const user = await UserService.createUser(name, email, password);
    res.status(201).json(user);
  }

  public async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await UserService.updateUser(
      Number(id),
      name,
      email,
      password
    );
    res.status(200).json(user);
  }

  public async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await UserService.deleteUser(Number(id));
    res.sendStatus(204);
  }
}

export default new UserController();
