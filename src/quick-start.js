import { inject, ProxyDiContainer } from "proxydi";

class Actor {
  @inject("Role") role;

  play = () => this.role.greet();
}

class Agent007 {
  greet = () => "Bond... James Bond";
}

const container = new ProxyDiContainer();
container.registerDependency(Agent007, "Role");
container.registerDependency(Actor, "Actor");

const actor = container.resolve("Actor");
console.log(actor.play());
