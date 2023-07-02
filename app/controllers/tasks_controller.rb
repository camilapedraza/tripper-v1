class TasksController < ApplicationController
  before_action :set_event, only: %i[create edit update destroy]
  before_action :set_task, only: :destroy

  def create
    @task = Task.new(task_params)
    @task.event = @event
    if @task.save
      # redirect_to trip_event_path(@trip, @event)
      redirect_to trip_event_path(@trip, @event)
    else
      @tasks = @event.tasks
      render "events/show", status: :unprocessable_entity
    end
  end

  def destroy
    @task.destroy
    redirect_to trip_event_path(@trip, @event), status: :see_other
  end

  private

  def set_task
    @task = Task.find(params[:task_id])
  end

  def set_event
    @event = Event.find(params[:event_id])
    @trip = @event.trip
  end

  def task_params
    params.require(:task).permit(:content)
  end
end
