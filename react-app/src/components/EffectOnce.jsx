import useEffectOnce from "../hooks/useEffectOnce";

export default function EffectOnce () {
    useEffectOnce(() => {
        console.log('Running effect once on mount');
    
        return () => {
          console.log('Running clean-up of effect on unmount');
        };
      });
    
      return null;
}