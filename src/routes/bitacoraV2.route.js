import { Router } from "express";
const router = Router();
import { bitacoraV2Ctlr } from '../controller/bitacoraV2.controller';

router.post('./crear', bitacoraV2Ctlr.crear)