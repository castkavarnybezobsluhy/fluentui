import * as React from 'react';
import { Button } from '@fluentui/react-button';
import * as rootPreview from '../../../.storybook/preview';
import { withLiveEditScope, setOptions } from 'storybook-addon-react-live-edit';

setOptions({ theme: 'darcula', presets: ['react'] });

export const decorators = [...rootPreview.decorators, withLiveEditScope({ React, Button })];
export const parameters = { ...rootPreview.parameters };
