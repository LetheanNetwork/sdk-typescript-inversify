import {interfaces} from 'inversify';

import { RunnerService } from './api/runner.service';
import { SystemService } from './api/system.service';

export class ApiServiceBinder {
    public static with(container: interfaces.Container) {
        container.bind<RunnerService>('RunnerService').to(RunnerService).inSingletonScope();
        container.bind<SystemService>('SystemService').to(SystemService).inSingletonScope();
    }
}
