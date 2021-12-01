import { IJobDetail } from '../../../store/jobsSlice';
import Icon from '../../../utils/getIcon';

const JobDetailsCard = ({
  detail,
  showSeparator,
}: {
  detail: IJobDetail;
  showSeparator: boolean;
}) => {
  return (
    <div key={detail.key}>
      <div className="flex">
        <div className="w-8 mr-4">
          <div className="w-full h-8">
            <Icon icon={detail.icon} />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-bold">{detail.key}</p>
          {Array.isArray(detail.value) ? (
            (detail.value as Array<string>).map(
              (value: string, key: number) => <p key={key}>{value}</p>
            )
          ) : (
            <p>{detail.value}</p>
          )}
          {detail.caption && <p className="text-sm mt-2">{detail.caption}</p>}
        </div>
        {detail.action && (
          <div className="w-8 ml-4 flex items-center">
            <div className="w-full h-8">
              <a href={detail.action.url}>
                <Icon icon={detail.action.icon} />
              </a>
            </div>
          </div>
        )}
      </div>
      {showSeparator && <hr className="mt-4 mb-4" />}
    </div>
  );
};

export default JobDetailsCard;
