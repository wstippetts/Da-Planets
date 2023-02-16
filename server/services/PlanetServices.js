import { dbContext } from "../db/DbContext.js"

class PlanetServices {
  async createPlanets(planetData) {
    const planet = await dbContext.Planets.create(planetData)
    return planet
  }
  async getPlanets() {
    const planet = await dbContext.Planets.find()
    return planet
  }

}
export const planetServices = new PlanetServices()