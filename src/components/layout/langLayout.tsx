import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import i18n from "../../i18n/i18n";

export default function LangLayout() {
  const { lng } = useParams();
  const navigate = useNavigate();

  const isValidLang = (lng: string) => /^[a-z]{2}(-[A-Z]{2})?$/.test(lng);

  useEffect(() => {
    if (!lng) {
      navigate("/en", { replace: true });
      return;
    }
    if (!isValidLang(lng)) {
      navigate("/en", { replace: true });
      return;
    }
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  return <Outlet />;
}
