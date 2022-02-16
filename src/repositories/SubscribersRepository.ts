import { EntityRepository, Repository } from "typeorm";
import { Subscribers } from "../entities";

@EntityRepository(Subscribers)
class SubscribersRepository extends Repository<Subscribers> {}

export { SubscribersRepository };
