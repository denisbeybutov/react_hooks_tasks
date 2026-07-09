import createBreakpoint from "../hooks/useBreakpoint";

const useBreakpoint = createBreakpoint({
    mobile: 0,
    tablet: 768,
    desktop: 1024,
  });

export default function Breakpoint(){
    const breakpoint = useBreakpoint();

  return (
    <div>
      {breakpoint === 'mobile' && <p>Mobile</p>}
      {breakpoint === 'tablet' && <p>Tablet</p>}
      {breakpoint === 'desktop' && <p>Desktop</p>}
    </div>
  );
}