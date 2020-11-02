import Application from 'test-fastboot-with-header/app';
import config from 'test-fastboot-with-header/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
