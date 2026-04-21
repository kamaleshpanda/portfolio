import CssIcon from "../../assets/skills/css.svg?react";
import DockerIcon from "../../assets/skills/docker.svg?react";
import FlaskIcon from "../../assets/skills/flask.svg?react";
import GitIcon from "../../assets/skills/git.svg?react";
import Html5Icon from "../../assets/skills/html5.svg?react";
import JavaIcon from "../../assets/skills/java.svg?react";
import MediapipeIcon from "../../assets/skills/mediapipe.svg?react";
import MysqlIcon from "../../assets/skills/mysql.svg?react";
import NumpyIcon from "../../assets/skills/numpy.svg?react";
import OpencvIcon from "../../assets/skills/opencv.svg?react";
import PandasIcon from "../../assets/skills/pandas.svg?react";
import PythonIcon from "../../assets/skills/python.svg?react";
import PytorchIcon from "../../assets/skills/pytorch.svg?react";
import ScikitlearnIcon from "../../assets/skills/scikitlearn.svg?react";
import TensorflowIcon from "../../assets/skills/tensorflow.svg?react";
import ExcelIcon from "../../assets/skills/excel.svg?react";
import PowerbiIcon from "../../assets/skills/powerbi.svg?react";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
      className="bg-primary-white px-4 py-10 lg:pb-25 sm:px-6 md:px-20 lg:px-28 2xl:px-36"
      id="skills"
    >
      <h2 className="mb-10 text-center text-[28px]/[114%] tracking-tight lg:text-[48px]/[114%]">
        <span className="pr-2 md:pr-4">My</span>
        <span className="font-extrabold">Skills</span>
      </h2>
      <ul className="grid grid-cols-2 justify-items-center gap-5 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-12 xl:grid-cols-5">
        <SkillCard title="Python">
          <PythonIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Pandas">
          <PandasIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="NumPy">
          <NumpyIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Scikit-Learn">
          <ScikitlearnIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="TensorFlow">
          <TensorflowIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="PyTorch">
          <PytorchIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="OpenCV">
          <OpencvIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="MediaPipe">
          <MediapipeIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="MySQL">
          <MysqlIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Flask">
          <FlaskIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Docker">
          <DockerIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Java">
          <JavaIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Excel">
          <ExcelIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Power BI">
          <PowerbiIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="Git">
          <GitIcon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="HTML5">
          <Html5Icon className="group-hover:fill-primary-white" />
        </SkillCard>
        <SkillCard title="CSS">
          <CssIcon className="group-hover:fill-primary-white" />
        </SkillCard>
      </ul>
    </section>
  );
}
