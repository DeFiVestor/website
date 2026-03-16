import { get, set } from '@vueuse/core';
import {
  type DashboardMessage,
  DashboardSchema,
  type VisibilityPeriod,
} from '@/types/dynamic-messages';

export const useDynamicMessages = createSharedComposable(() => {
  const dashboardMessages = ref<DashboardSchema>([]);

  const getValidMessages = <T extends { period: VisibilityPeriod }>(
    messages: T[],
  ): T[] => {
    const now = Date.now() / 1000;
    return messages.filter(x => x.period.start <= now && x.period.end > now);
  };

  const activeDashboardMessages = computed<DashboardMessage[]>(() => {
    if (!isDefined(dashboardMessages))
      return [];

    return getValidMessages(get(dashboardMessages));
  });

  const getDashboardData = async (): Promise<DashboardSchema> => DashboardSchema.parse([]);

  const fetchMessages = async () => {
    set(dashboardMessages, await getDashboardData());
  };

  return {
    activeDashboardMessages,
    fetchMessages,
  };
});
