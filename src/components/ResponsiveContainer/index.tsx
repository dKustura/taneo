// This component has completely been copy-pasted from the following issue:
// Responsive container does not work for React 18 and all other used features does
// https://github.com/recharts/recharts/issues/2831
// 'cause why not...

import useResizeObserver from '@react-hook/resize-observer';
import clsx from 'clsx';
import {
  cloneElement,
  CSSProperties,
  isValidElement,
  PropsWithChildren,
  useLayoutEffect,
  useState,
} from 'react';

const STYLE: CSSProperties = {
  width: '100%',
  height: '100%',
};

export interface ResponsiveContainerProps {
  readonly className?: string;
}

function ResponsiveContainer(props: PropsWithChildren<ResponsiveContainerProps>) {
  const { className: classNameProp, children } = props;

  const className = clsx('recharts-responsive-container', classNameProp);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const containerSize = useSize(container);

  const renderChart = () => {
    if (isValidElement(children)) {
      return cloneElement(children, {
        width: containerSize?.width ?? '',
        height: containerSize?.height ?? '',
      });
    } else {
      return null;
    }
  };

  return (
    <div className={className} style={STYLE} ref={setContainer}>
      {renderChart()}
    </div>
  );
}

function useSize(target: HTMLElement | null): DOMRect | null {
  const [size, setSize] = useState<DOMRect | null>(null);

  useLayoutEffect(() => {
    setSize(target?.getBoundingClientRect() ?? null);
  }, [target]);

  useResizeObserver(target, (entry) => {
    setSize(entry.contentRect);
  });

  return size;
}

export default ResponsiveContainer;
