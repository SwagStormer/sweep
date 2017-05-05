import {Store} from '../TSData/store';
import {Record} from '../TSData/record';
export interface IAnnouncement {
  id?: number;
  pinned: boolean;
  course: number;
  announcement: string;
}

export class AnnouncementService extends Store<IAnnouncement> {
  recordClass = class Announcement extends Record {};
  endpoint = 'announcements';
}
