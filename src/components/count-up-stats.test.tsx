import { act, render, screen } from '@testing-library/react';
import CountUpStats from './count-up-stats';

test('counts only after entering view, reaches exact values and cleans up', () => {
  let onIntersect: IntersectionObserverCallback = () => {};
  let tick: FrameRequestCallback = () => {};
  const disconnect = jest.fn();
  const originalObserver = window.IntersectionObserver;
  window.IntersectionObserver = jest.fn().mockImplementation((callback) => {
    onIntersect = callback;
    return { observe: jest.fn(), disconnect };
  });
  const raf = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
    tick = callback;
    return 1;
  });
  const cancel = jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});

  try {
    const { unmount } = render(<CountUpStats stats={[
      { value: '6', label: 'brands' },
      { value: '99.98%', label: 'uptime' },
      { value: '−60%', label: 'manual work' },
      { value: '45+', label: 'engineers' },
    ]} />);
    expect(screen.getByLabelText('6')).toHaveTextContent('0');
    expect(raf).not.toHaveBeenCalled();
    act(() => onIntersect([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
    act(() => tick(100));
    act(() => tick(900));
    expect(screen.getByLabelText('6')).toHaveTextContent('5');
    act(() => tick(1700));
    for (const value of ['6', '99.98%', '−60%', '45+']) {
      expect(screen.getByLabelText(value).textContent).toBe(value);
    }
    const frameCount = raf.mock.calls.length;
    act(() => onIntersect([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
    expect(raf).toHaveBeenCalledTimes(frameCount);
    unmount();
    expect(cancel).toHaveBeenCalledWith(1);
    expect(disconnect).toHaveBeenCalled();
  } finally {
    window.IntersectionObserver = originalObserver;
    raf.mockRestore();
    cancel.mockRestore();
  }
});
