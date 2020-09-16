import Header from '@views/components/Header';
import IconSettings from '@views/components/SVG/Settings';
import React from 'react';
import { useHistory } from 'react-router';

const Wrap: React.FC = (props) => {
  const history = useHistory();
  const [showPathname, setShowPathname] = React.useState(false);
  React.useEffect(() => {
    window.document.onkeydown = (e) => {
      if (!e || e.keyCode !== 18 || $$.isPro()) return;
      setShowPathname(true);
    };
    window.document.onkeyup = () => {
      setShowPathname(false);
    };
    return () => {
      setShowPathname(false);
    };
  }, []);
  return (
    <section className="ui-vw-100 ui-vh-100 flex-col">
      <Header>
        {showPathname && (
          <section className="showPathname">
            <span className="showPathnameText">{history.location.pathname}</span>
          </section>
        )}
        <div className="flex just-center align-center ui-w-100 ui-h-100">
          <div className="flex-1 ui-h-100 flex just-center align-center drag"></div>
          <IconSettings
            onFunc={() => {
              history.push('/settings');
            }}
          />
        </div>
      </Header>
      <main className="flex-1 ui-ovy-a ui-w-100 ui-h-100">{props.children}</main>
      <style jsx>{`
        .showPathname {
          height: 30px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          z-index: 1024;
        }
        .showPathnameText {
          font-size: 16px;
          background-color: rgba(0, 0, 0, 0.6);
          padding: 0 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default Wrap;
