import { planetServices } from "../services/PlanetServices.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {

  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanets)
      .get('', this.getPlanets)
  }
  async createPlanets(req, res, next) {
    try {
      let planetData = req.body
      let planet = await planetServices.createPlanets(planetData)
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }
  async getPlanets(req, res, next) {
    try {
      let planet = await planetServices.getPlanets()
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }

}