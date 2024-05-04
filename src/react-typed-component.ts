import { ReactElement, ReactNode, ValidationMap, WeakValidationMap } from 'react';

export type PropsWithChildren<P> = P & {children?: ReactNode};


export interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P> | undefined;
  contextTypes?: ValidationMap<any> | undefined;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}

export type FCC<P = {}> = FunctionComponent<P>;
